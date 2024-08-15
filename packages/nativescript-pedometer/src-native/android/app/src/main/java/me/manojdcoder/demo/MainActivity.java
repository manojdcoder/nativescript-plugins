package me.manojdcoder.demo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function4;
import me.manojdcoder.GoogleHealth;

public class MainActivity extends AppCompatActivity {
    private GoogleHealth googleHealth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      googleHealth = new GoogleHealth(this, "com.google.android.apps.healthdata");
      setContentView(R.layout.activity_main);
      Button button = findViewById(R.id.button);
      button.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
          googleHealth.requestAuthorization(aBoolean -> {
            if(aBoolean) {
              Instant now = Instant.now();
              googleHealth.query(now.minus(24, ChronoUnit.HOURS).toEpochMilli(), now.toEpochMilli(), (Function4<? super String, ? super Long, ? super Double, ? super Double, Unit>) (error, numberOfSteps, totalCal, activeCal) -> {
                return null;
              });
            }
            return null;
          });
        }
      });
    }
}
