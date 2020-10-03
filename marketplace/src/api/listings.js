import axios from "./axios";

const endpoint = "/listings";

const getListings = () => axios.get(endpoint);

const addListings = (listing, uploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, idx) =>
    data.append("images", {
      name: `image ${idx}`,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  axios.post(endpoint, data, {
    onUploadProgress: (progress) =>
      uploadProgress(progress.loaded / progress.total),
  });
};

export default { getListings, addListings };
