import { Readable } from "stream";

const streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = Readable.from(buffer);

    stream.on("data", () => {});
    stream.on("error", reject);

    resolve(stream);
  });
};

export default streamUpload;
