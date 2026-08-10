const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
const host = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export const API_BASE = `${host}/api`;

export function normalizeResponse(payload, resourceKey) {
  if (!payload) {
    return [];
  }

  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload[resourceKey])) {
    return payload[resourceKey];
  }

  if (Array.isArray(payload.data)) {
    return payload.data;
  }

  const arrayField = Object.values(payload).find((value) => Array.isArray(value));
  return Array.isArray(arrayField) ? arrayField : [];
}

export async function fetchResource(resourceKey) {
  const response = await fetch(`${API_BASE}/${resourceKey}/`);
  if (!response.ok) {
    throw new Error(`Failed to load ${resourceKey}: ${response.status} ${response.statusText}`);
  }
  const payload = await response.json();
  return normalizeResponse(payload, resourceKey);
}
