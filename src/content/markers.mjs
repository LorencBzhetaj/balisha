// Shënjuesit e përmbajtjes.
// M  = e dhënë që mungon nga klienti (vend-mbajtës)
// Q  = tekst i klientit që kërkon vendim/konfirmim para publikimit (shfaqet i theksuar në staging)
// PHONE / EMAIL = kontaktet e studios, futen brenda teksteve
export const M = (sq, en = sq) => ({ missing: { sq, en } });
export const Q = (sq, en, note) => ({ question: { sq, en, note } });
export const PHONE = { ref: 'phone' };
export const EMAIL = { ref: 'email' };
