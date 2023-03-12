"use strict";
import { Buffer } from "node:buffer";
const { scrypt, createCipheriv } = await import("node:crypto");

const algorithm = "aes-192-cbc";

const encrypt = async (text, password) => {
  // TODO: get rid of hardcoded salt
  let encrypted;

  // Herdcoded iv
  const iv = Buffer.from("0123456789abcdef");

  // First, we'll generate the key. The key length is dependent on the algorithm.
  // In this case for aes192, it is 24 bytes (192 bits
  let key = await new Promise((resolve, reject) => {
    scrypt(password, "salt", 24, (err, key) => {
      if (err) reject(err);
      else resolve(key);
    });
  });

  const cipher = createCipheriv(algorithm, key, iv);

  encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  return encrypted;
};

export default encrypt;
