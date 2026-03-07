import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.milanos.scanner',
  appName: 'Milano Scanner',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
