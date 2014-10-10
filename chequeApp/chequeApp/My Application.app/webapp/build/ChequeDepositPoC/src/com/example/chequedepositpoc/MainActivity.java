package com.example.chequedepositpoc;

import org.apache.cordova.*;

import android.os.Bundle;

public class MainActivity extends DroidGap {

@Override

public void onCreate(Bundle savedInstanceState) {

super.onCreate(savedInstanceState);

super.loadUrl("assets/www/index.html");

}

}