import * as THREE from 'three';

export function GradientTexture(colorA:string, colorB:string) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const size = 256;
    canvas.width = size;
    canvas.height = size;

    if (!ctx) {
        throw new Error("2D context not supported");
    }

    // Create a radial gradient
    const gradient = ctx.createRadialGradient(size / 2, size / 2, size * 0.2, size / 2, size / 2, size * 0.5);
    gradient.addColorStop(0, colorA); // Start color
    gradient.addColorStop(1, colorB); // End color

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    // Create texture
    const texture = new THREE.CanvasTexture(canvas);

    // Clean up
    canvas.remove();

    return texture;
}
