// src/data/config.js
import { Platform } from 'react-native';

const PORT = 3333;

/**
 * Se usar CELULAR FÍSICO, preencha com o IPv4 do seu PC.
 * Ex.: '192.168.0.105'
 */
const FORCE_LAN_IP = ''; // deixe vazio para Web/Emulador

const isWeb = Platform.OS === 'web';
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

function resolveHost() {
  if (FORCE_LAN_IP) return FORCE_LAN_IP;    // celular físico
  if (isWeb) return 'localhost';            // Web: evita firewall da interface LAN
  if (isAndroid) return '10.0.2.2';         // emulador Android
  if (isIOS) return 'localhost';            // simulator iOS
  return 'localhost';
}

export const API_URL = `http://${resolveHost()}:${PORT}`;
console.log('[API_URL]', API_URL);
