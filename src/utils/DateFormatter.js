export function formatReadableDate(isoString, options = {}) {
    const date = new Date(isoString);
  
    const defaultOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC',
    };
  
    const mergedOptions = { ...defaultOptions, ...options };
    const formatted = new Intl.DateTimeFormat('id-ID', mergedOptions).format(date);
  
    return formatted.replace(' pukul', ' -');
}