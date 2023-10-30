import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import Dropzone from "react-dropzone";

interface ImageUploadProps {
  images: any;
  setImages: any;
  maxImages: any;
}

const ImageUpload = ({ images, setImages, maxImages }: ImageUploadProps) => {
  const handleImageDrop = (acceptedFiles: Blob[]) => {
    if (images.length + acceptedFiles.length > maxImages) {
      alert(`Limite máximo de ${maxImages} ${maxImages > 1 ? "imagens" : "imagem"} atingido.`);
      return;
    }

    const imagePromises = acceptedFiles.map((file: Blob) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(String(reader.result));
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((imageBase64Data) => {
      setImages([...images, ...imageBase64Data]);
    });
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  return (
    <>
      <Box
        color={"black"}
        borderStyle={"dotted"}
        width={"80%"}
        height={"6rem"}
        padding={"0.5rem"}
        borderRadius={"1.5rem"}
        fontSize={"2rem"}
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Dropzone onDrop={handleImageDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <text>Clique ou arraste para adicionar arquivos</text>
            </div>
          )}
        </Dropzone>
        
      </Box>

      <Box
        color={"black"}
        display={"flex"}
        justifyContent={"flex-start"}
        width={"80%"}
      >
        <span style={{fontWeight: 700}}>Imagens selecionadas:</span>
        <Flex className="selected-images" justifyContent={"center"} alignItems={"center"} flexWrap="wrap">
        {images.map((image: string, index: number) => (
          <Box
            key={index}
            className="image-thumbnail"
            marginRight="4"
            marginBottom="4"
          >
            <img src={image} alt={`Thumbnail ${index}`} width="100px" />
            <IconButton
              icon={<SmallCloseIcon />}
              size="sm"
              variant="ghost"
              color="red"
              aria-label="Remover imagem"
              onClick={() => handleRemoveImage(index)}
            />
          </Box>
        ))}
      </Flex>
      </Box>
    </>
  );
};

export default ImageUpload;
