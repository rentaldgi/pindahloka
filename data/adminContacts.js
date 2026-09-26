/**
 * Generate WhatsApp link with pre-filled message
 * @param {Object} unit - Object containing daerah and name properties
 * @returns {string|null} WhatsApp deep link or null if invalid input
 */
export const generateWhatsAppLink = (unit) => {
  try {
    // Validate input
    if (!unit || typeof unit !== 'object') {
      console.error('Invalid unit: must be an object');
      return null;
    }

    if (!unit.daerah || !unit.name) {
      console.error('Invalid unit object: daerah and name are required');
      return null;
    }

    // Mapping admin numbers by region
    // const adminByDaerah = {
    //   Jakarta, Bekasi, Bandung: ['628153135669'],
    //   Bali, Malang, Purwokerto, Surabaya: ['6287715410084'],
    // };
    const adminByDaerah = {
      Jakarta: ['6285899899948'],
      Bekasi: ['6285899899948'],
      Bandung: ['6285899899948'],
      Bali: ['6285899899948'],
      Malang: ['6285899899948'],
      Purwokerto: ['6285899899948'],
      Surabaya: ['6285899899948'],
    };


    const nomorAdminList = adminByDaerah[unit.daerah];
    const defaultAdmin = '6285899899948';
    let nomorAdmin = nomorAdminList?.[0] || defaultAdmin;

    // Validasi nomor
    if (!/^[0-9]{10,15}$/.test(nomorAdmin) || !nomorAdmin.startsWith('62')) {
      console.error(`Invalid phone number: ${nomorAdmin}. Using default admin number.`);
      nomorAdmin = defaultAdmin;
    }

    // Bersihkan input untuk mencegah karakter aneh
    const sanitizedDaerah = unit.daerah.toString().trim().replace(/[^\w\s-]/g, '');
    const sanitizedName = unit.name.toString().trim().replace(/[^\w\s-]/g, '');

    // Pesan yang akan dikirimkan
    const message = `Halo Admin ${sanitizedDaerah},\n\nSaya ingin menyewa unit ${sanitizedName} di ${sanitizedDaerah}.\nApakah unit tersebut masih tersedia? Terima kasih.`;
    const encodedMessage = encodeURIComponent(message);

    // Deteksi platform
    let baseUrl = 'https://web.whatsapp.com/send';
    if (typeof navigator !== 'undefined') {
      const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
      if (isMobile) {
        baseUrl = 'https://api.whatsapp.com/send';
      }
    }

    // Buat link
    const link = `${baseUrl}?phone=${nomorAdmin}&text=${encodedMessage}`;
    console.log('Generated WhatsApp link:', link);

    return link;
  } catch (error) {
    console.error('Error generating WhatsApp link:', error.message);
    return null;
  }
};
