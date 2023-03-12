"use strict";
import { Buffer } from "node:buffer";
const { scryptSync, createDecipheriv } = await import("node:crypto");

const decrypt = (text, password) => {
  const algorithm = "aes-192-cbc";
  // Use the async `crypto.scrypt()` instead.
  const key = scryptSync(password, "salt", 24);
  // Herdcoded iv
  const iv = Buffer.from("0123456789abcdef");

  try {
    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(text, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (e) {
    throw new Error(e);
  }
};

export default decrypt;
