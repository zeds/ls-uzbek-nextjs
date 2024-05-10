"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;

var _ssr = require("@supabase/ssr");

function createClient() {
  // Create a supabase client on the browser with project's credentials
  return (0, _ssr.createBrowserClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}