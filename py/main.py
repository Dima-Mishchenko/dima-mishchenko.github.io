import qrcode
from PIL import Image

url = "https://dima-mishchenko.github.io/ai-art/QR.html"

# Configure QR code
qr = qrcode.QRCode(
    version=None,  # auto size
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # best error correction
    box_size=20,  # pixels per box (increase for higher resolution)
    border=4,     # thickness of border (min 4)
)

qr.add_data(url)
qr.make(fit=True)

# Generate image
img = qr.make_image(fill_color="black", back_color="white")

# Save with high resolution
img.save("my_qr_highres.png")

print("High-res QR saved as my_qr_highres.png")
