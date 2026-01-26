"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../components/NavBar/Navbar";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formats, setFormats] = useState([]);

  async function handleGenerate() {
    if (!url) return alert("Paste a video link");

    setLoading(true);

    try {
      const res = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, platform }),
      });

      const data = await res.json();
      setFormats(data.formats || []);
    } catch (err) {
      alert("Failed to fetch video info");
    }

    setLoading(false);
  }

  return (
    <div>
      <NavBar></NavBar>
      <main className={styles.main}>
        <h2 className={styles.header}>
          Download Videos From Your Favorite Social Media
        </h2>
        <div className={styles.socialMediaIcons}>
          <FaFacebook className={styles.icon}></FaFacebook>
          <FaTwitter className={styles.icon}></FaTwitter>
          <FaInstagram className={styles.icon}></FaInstagram>
          <FaTiktok className={styles.icon}></FaTiktok>
        </div>

        <select
          className={styles.select}
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option disabled selected>
            Select Options
          </option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="instagram">Instagram</option>
          <option value="tiktok">TikTok</option>
        </select>

        <input
          type="text"
          className={styles.input}
          placeholder="Paste Video Link Here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "LOADING..." : "GENERATE DOWNLOAD OPTIONS"}
        </button>

        {formats.length > 0 && (
          <div className={styles.results}>
            {formats.map((f, i) => (
              <a key={i} href={f.url} target="_blank">
                Download {f.quality}
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
