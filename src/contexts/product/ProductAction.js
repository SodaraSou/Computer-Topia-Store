import {
  doc,
  collection,
  addDoc,
  getDoc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { dbFirestore, storage } from "../../firebase.config";
import { toast } from "react-toastify";

export const addProduct = async (inputData, imgUrls) => {
  try {
    let productImgs = [];
    const productsRef = collection(dbFirestore, "product");
    const docRef = await addDoc(productsRef, {
      ...inputData,
      stock: parseFloat(inputData.stock),
      price: parseFloat(inputData.price),
      offer: parseFloat(inputData.offer),
      productImgs,
    });
    const productId = docRef.id;
    if (imgUrls.length > 0) {
      for (let i = 0; i < imgUrls.length; i++) {
        let img = imgUrls[i];
        const imageRef = ref(storage, `product-image/${productId}_${i}`);
        await uploadBytes(imageRef, img);
        const imgUrl = await getDownloadURL(imageRef);
        productImgs.push(imgUrl);
      }
      await updateDoc(docRef, { productImgs });
    }
    toast.success("Successfully Register!");
  } catch (error) {
    console.log(error);
    toast.error("Failed To Register!");
  }
};

export const getAllProduct = (callback) => {
  const docRef = collection(dbFirestore, "product");
  const unsubscribe = onSnapshot(
    docRef,
    (docSnap) => {
      const listing = [];
      docSnap.forEach((item) =>
        listing.push({
          id: item.id,
          data: item.data(),
        })
      );
      callback(listing);
    },
    (error) => {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  );
  return unsubscribe;
};

export const getProductById = async (productId) => {
  try {
    const productsRef = doc(dbFirestore, "product", productId);
    const productSnap = await getDoc(productsRef);
    return productSnap.data();
  } catch (error) {
    console.log(error);
  }
};

export const removeProductById = async (productId) => {
  try {
    const productData = await getProductById(productId);
    if (productData.productImgs && productData.productImgs.length > 0) {
      for (let i = 0; i < productData.productImgs.length; i++) {
        const productImgRef = ref(storage, `product-image/${productId}_${i}`);
        await deleteObject(productImgRef);
      }
    }
    const productsRef = doc(dbFirestore, "product", productId);
    await deleteDoc(productsRef);
    toast.success("Successfully Remove!");
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong!");
  }
};

export const updateProductById = async (
  updatedData,
  imgUrls,
  imgIndex,
  productId
) => {
  try {
    const productData = await getProductById(productId);
    const productsRef = doc(dbFirestore, "product", productId);
    const existingProductImgs = productData.productImgs || [];
    if (imgIndex.length > 0) {
      for (let i = 0; i < imgIndex.length; i++) {
        const imageRef = ref(
          storage,
          `product-image/${productId}_${imgIndex[i]}`
        );
        if (existingProductImgs.length !== 0) {
          await deleteObject(imageRef);
        }
        await uploadBytes(imageRef, imgUrls[imgIndex[i]]);
        const newProductImg = await getDownloadURL(imageRef);
        existingProductImgs[imgIndex[i]] = newProductImg;
      }
    }
    await updateDoc(productsRef, {
      ...updatedData,
      stock: parseFloat(updatedData.stock),
      price: parseFloat(updatedData.price),
      offer: parseFloat(updatedData.offer),
      productImgs: existingProductImgs,
    });
    toast.success("Update Successfully!");
  } catch (error) {
    console.log(error);
    toast.error("Something When Wrong!");
  }
};

export const calculateNumberOfProduct = (listProduct) => {
  const typeCount = {
    Laptop: 0,
    "PC-Hardware": 0,
    Accessories: 0,
    Peripherals: 0,
  };
  listProduct.forEach((product) => {
    const type = product.data.type;
    if (type in typeCount) {
      typeCount[type]++;
    }
  });
  return typeCount;
};

export const sortProductByType = (listProduct, type) => {
  if (type === "Highest Price") {
    const sortedList = listProduct.slice().sort((a, b) => {
      return b.data.price - a.data.price;
    });
    return sortedList;
  } else if (type === "Lowest Price") {
    const sortedList = listProduct.slice().sort((a, b) => {
      return a.data.price - b.data.price;
    });
    return sortedList;
  } else {
    const sortedList = listProduct.filter((order) => order.data.type === type);
    return sortedList;
  }
};
