import { CldUploadWidget } from "next-cloudinary";
import { FileImage } from "../Icons/FileImage";
import { Button } from "./Button";
import axios from "axios";

function Tagging(props) {

  const updDone = async (result) => {
    const imageUrl = result.info.url;
    const url =
      "https://api.imagga.com/v2/tags?image_url=" +
      encodeURIComponent(imageUrl);
    const response = await axios.get(url, {
      headers: {
        Authorization:
          "Basic YWNjXzM5Yjc1YjJmM2E5MTg3ZTo3MmI1YmVkY2YzNjI0OTlmMzQ1YTQyYjliMjg5NGUxOQ==",
      },
    });
    console.log(imageUrl);
    let newArray = response.data.result.tags
      .filter((item) => item.confidence > 10)
      .map((item) => item.tag.en);
    props.onTag(newArray);
    props.onUpload(true);
    props.onImage(result.info.url);
  };

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <div className="flex justify-center ">
        <CldUploadWidget onUpload={updDone} uploadPreset="o6ot9rx5">
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <div className=" bg-slate-700 rounded-md hover:bg-slate-900 duration-700 ease-in-out">
              <Button className=" flex gap-3 " onClick={handleOnClick}>
                <FileImage />
                Upload Image
              </Button>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
}

export default Tagging;
