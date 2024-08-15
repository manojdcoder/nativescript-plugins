package me.manojdcoder

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.ViewGroup
import android.widget.Button
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class PermissionsRationaleActivity : AppCompatActivity() {

  companion object {
    var agreementText: String = """
            Health Data Usage Agreement

            By proceeding, you agree to grant this app access to your Google Health Connect data, specifically steps and calories information. This data will be used solely within the app to provide personalized features aimed at enhancing your user experience.

            Important Points:
            - Data Collection: We will collect your steps and calorie data to tailor the app’s features to your specific health and fitness needs.
            - Privacy: Your health data will NOT be shared with any third parties. All information will be securely stored and used exclusively within the app.
            - Purpose: The collected data will be utilized to provide you with insights, progress tracking, and personalized recommendations to help you achieve your health and fitness goals.

            By tapping "I Agree," you acknowledge that you have read and understood this agreement and consent to the data collection as described above.
        """.trimIndent()
  }

  @SuppressLint("SetTextI18n")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // Create a LinearLayout to hold the TextView and Button
    val linearLayout = LinearLayout(this).apply {
      orientation = LinearLayout.VERTICAL
      layoutParams = ViewGroup.LayoutParams(
        ViewGroup.LayoutParams.MATCH_PARENT,
        ViewGroup.LayoutParams.MATCH_PARENT
      )
    }

    // Create a TextView that will be scrollable
    val textView = TextView(this).apply {
      text = agreementText
      layoutParams = LinearLayout.LayoutParams(
        ViewGroup.LayoutParams.MATCH_PARENT,
        0,
        1f
      )
    }

    // Wrap the TextView in a ScrollView to make it scrollable
    val scrollView = ScrollView(this).apply {
      layoutParams = LinearLayout.LayoutParams(
        ViewGroup.LayoutParams.MATCH_PARENT,
        0,
        1f
      )
      addView(textView)
    }

    // Create an "I agree" Button
    val agreeButton = Button(this).apply {
      text = "I agree"
      layoutParams = LinearLayout.LayoutParams(
        ViewGroup.LayoutParams.MATCH_PARENT,
        ViewGroup.LayoutParams.WRAP_CONTENT
      )
      setOnClickListener {
        finish() // Go back to the previous activity
      }
    }

    // Add the ScrollView and Button to the LinearLayout
    linearLayout.addView(scrollView)
    linearLayout.addView(agreeButton)

    // Set the LinearLayout as the content view
    setContentView(linearLayout)
  }

  // Disable the back button
  override fun onBackPressed() {
    // Do nothing to disable the back button
  }
}
