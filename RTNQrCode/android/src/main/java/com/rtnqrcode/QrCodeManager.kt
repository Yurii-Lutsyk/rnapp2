package com.rtnqrcode

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.RTNQrCodeManagerDelegate
import com.facebook.react.viewmanagers.RTNQrCodeManagerInterface

@ReactModule(name = QrCodeManager.NAME)
class QrCodeManager(mCallerContext: ReactApplicationContext) :
    SimpleViewManager<QrCode>(), RTNQrCodeManagerInterface<QrCode?> {

        private val mDelegate: ViewManagerDelegate<QrCode>

        init {
            mDelegate = RTNQrCodeManagerDelegate(this)
        }

        override fun getDelegate(): ViewManagerDelegate<QrCode> {
            return mDelegate
        }

        override fun getName(): String {
            return NAME
        }

        override fun createViewInstance(reactContext: ThemedReactContext): QrCode {
            return QrCode(reactContext)
        }

        companion object {
            const val NAME = "RTNQrCode"
        }

        @ReactProp(name = "text")
        override fun setText(view: QrCode?, value: String?) {
            value?.let { view?.getQrCodeBitmap(it) }
        }
    }