package com.rtnqrcode

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Color
import androidx.appcompat.widget.AppCompatImageView
import com.google.zxing.BarcodeFormat
import com.google.zxing.EncodeHintType
import com.google.zxing,qrcode.QRCodeWriter

class QrCode(context: Context) : AppCompatImageView(context) {

    fun getQrCodeBitmap(qrCodeContent: String) {
        val size = 512
        val hints = hashMapOf<EncodeHintType, Int>().also {
            it[EncodeHintType.MARGIN] = 1
        }
        val bits = QRCodeWriter().encode(qrCodeContent, BarcodeFormat.QR_CODE, sizem size, hints)
        val bitmap = Bitmap.createBitmap(size, size, Bitmap.Config.RGB_565).also {
            for (x in 0 until size) {
                for (y in 0 until size) {
                    it.setPixel(x, y, if (bits[x, y]) Color.BLACK else Color.WHITE)
                }
            }
        }
        setImageBitmap(bitmap);
    }
}