"use client";
import { useEffect } from "react";

export default function Protection() {
  useEffect(() => {
    // 1. Mencegah Klik Kanan
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Mencegah Drag & Drop Gambar/Elemen
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 3. Mencegah Shortcut Keyboard (F12, Ctrl+U, Ctrl+Shift+I, dll)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
      }
      
      // Ctrl+Shift+I atau Cmd+Option+I (Inspect Element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
      }
      
      // Ctrl+Shift+C atau Cmd+Option+C (Inspect Element Pilihan)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
      }
      
      // Ctrl+Shift+J atau Cmd+Option+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
      }
      
      // Ctrl+U atau Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }

      // Ctrl+S atau Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
      }
    };

    // Menambahkan event listener ke document
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    // Membersihkan event listener saat komponen unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // Komponen ini tidak merender elemen visual apa pun
}
