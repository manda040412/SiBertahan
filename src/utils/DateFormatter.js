// src/utils/DateFormatter.js

export function formatReadableDate(isoString, options = {}) {
  const date = new Date(isoString);

  // Opsi default untuk format tanggal dalam Bahasa Inggris
  const defaultOptions = {
    year: 'numeric',
    month: 'long', // 'long' untuk "August", 'short' untuk "Aug"
    day: 'numeric',
  };

  const mergedOptions = { ...defaultOptions, ...options };

  // Menggunakan 'en-US' locale untuk Bahasa Inggris
  const formatted = new Intl.DateTimeFormat('en-US', mergedOptions).format(date);

  return formatted;
}