import React from "react";
import { useState, useEffect, useRef } from "react";
import videos from "../videos";

const Gallery = () => {
  const galleryRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const generateItems = () => {
      const rows = [
        { id: 1, count: 4 },
        { id: 2, count: 3 },
        { id: 3, count: 4 },
      ];
    };
  });
  return <div></div>;
};

export default Gallery;
