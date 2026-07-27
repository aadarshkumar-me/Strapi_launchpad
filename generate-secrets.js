#!/usr/bin/env node

/**
 * Generate secure secrets for Strapi production deployment
 * Run this script and copy the output to your Render environment variables
 */

import crypto from 'crypto';

function generateSecret(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

function generateAppKeys(count = 2) {
  return Array.from({ length: count }, () => generateSecret(16)).join(',');
}

console.log('\n🔐 STRAPI PRODUCTION SECRETS GENERATOR\n');
console.log('Copy these values to your Render environment variables:\n');
console.log('='.repeat(70));

const secrets = {
  APP_KEYS: generateAppKeys(2),
  API_TOKEN_SALT: generateSecret(16),
  ADMIN_JWT_SECRET: generateSecret(32),
  TRANSFER_TOKEN_SALT: generateSecret(16),
  JWT_SECRET: generateSecret(32),
};

Object.entries(secrets).forEach(([key, value]) => {
  console.log(`${key}=${value}`);
});

console.log('='.repeat(70));
console.log('\n⚠️  IMPORTANT SECURITY NOTES:\n');
console.log('1. Copy each value exactly as shown (no quotes needed in Render)');
console.log('2. Never commit these values to GitHub');
console.log('3. Each environment (dev, staging, prod) should have different secrets');
console.log('4. Store these in a secure location (password manager)');
console.log('5. Do NOT share these with anyone\n');
