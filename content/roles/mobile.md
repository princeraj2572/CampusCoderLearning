# Mobile developer

*Build apps people carry in their pocket.*

## The job

You build apps for Android, iPhone or both. You work with touch input, small screens, flaky networks, battery limits and app-store rules, which makes the job different from the web.

### A day in the job

- Build screens and navigation from designs.
- Handle offline use, slow networks and background work.
- Test on real devices and several screen sizes.
- Ship through the app stores and fix issues from crash reports.

**Good if:** You enjoy polished interfaces, and you like building something you use yourself every day.

**Main tools:** Kotlin, Swift, or React Native/Flutter

## Where you will work

| Type | What you do there |
| --- | --- |
| Consumer app companies | Food, travel, payments and social apps depend on mobile. |
| Fintech and banks | Secure apps used by millions. |
| Startups | Mobile-first products built by tiny teams. |
| Agencies | Build apps for many brands. |

## Study plan

### Programming foundations (Months 1–2)

- A solid grip on one language: Kotlin, Swift, or TypeScript for React Native.
- OOP, collections and async code.
- Git, and reading API documentation.

**Build:** A command-line or console app that fetches and prints data from a public API.

### First apps (Months 3–5)

- Pick one route: native Android (Kotlin and Jetpack Compose), native iOS (Swift and SwiftUI) or cross-platform (React Native with Expo, or Flutter).
- Layouts, navigation, lists and forms.
- Calling REST APIs and showing the results.
- Local storage.

**Build:** A multi-screen app that talks to an API and saves data on the device.

### Real-world behaviour (Months 6–8)

- App architecture: separating screens, state and data.
- Offline-first design and syncing.
- Push notifications, permissions, camera and location.
- Authentication and keeping tokens safe.
- Crash reporting and analytics.

**Build:** Make your app work offline and add push notifications and sign-in.

### Release (Months 9+)

- Performance: list rendering, memory, start-up time.
- Testing UI and logic.
- App store listings, signing, review guidelines and release builds.
- CI for building and testing.

**Build:** Publish an app to the Play Store or TestFlight and collect feedback.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Expense or habit tracker | Several screens, local storage, charts. | You can build and navigate a complete app. |
| Intermediate | Campus utility app | Timetable, notes or bus times from an API, with notifications and offline use. | You can handle the network and device features. |
| Advanced | A published app with real users | Sign-in, sync, crash reporting, store listing and several releases. | You can ship and maintain, which is what employers want. |

## Tools

- Android Studio, or Xcode on a Mac
- A real device for testing
- Expo and Expo Go, if you use React Native
- Firebase, or an equivalent for auth and push
- Postman
- A crash reporting tool such as Crashlytics or Sentry

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Learn one mobile topic and add it to your app (1 hour) |
| Tue, Thu | DSA: two problems and a revision (45 minutes) |
| Fri | Study one well-known app's behaviour and rebuild a screen (45 minutes) |
| Weekend | Build: two hours on your app, test on a real phone |

## A senior's advice

### Do

- Test on a real, cheap phone. Emulators hide slowness.
- Design for no network first, then add the network.
- Ask for a permission only when the user needs the feature, and explain why.
- Keep a release checklist and follow it.
- Read crash reports weekly.

### Avoid

- Choosing cross-platform or native only because of hype. Choose for the team and the product.
- Doing heavy work on the main thread.
- Storing tokens in plain text on the device.
- Building for the newest phone only.
- Ignoring the app store rules until the review fails.

## Mistakes juniors make

- Only testing on a fast emulator.
- Blocking the main thread with network or database work.
- Asking for every permission on the first launch.
- Not handling screen rotation, small screens or the keyboard.
- Ignoring the store's review guidelines until the app is rejected.

## Questions to ask a senior

- How do you keep release quality up when you cannot instantly update the app?
- How do you support old phones and old operating systems?
- What do you log to understand a crash?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Cross-platform makes native skills useless. | Knowing the native platform helps you solve problems the framework hides. |
| Mobile is only for people who like design. | Performance, offline sync and architecture are large parts of the job. |
| Once published, an app is finished. | Releases, crashes and operating-system updates never stop. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Build and run the app on a real device, fix small bugs, and learn the navigation structure. |
| Days 31–60 | Ship one screen or flow with tests and handle its offline behaviour. |
| Days 61–90 | Find a crash or slow screen from the reports and fix it. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Build screens, wire them to APIs, and fix bugs from crash reports. |
| Mid-level (2–5 years) | Own features and architecture, and handle offline use and performance. |
| Senior (5+ years) | Lead app architecture, release process and quality for the team. |
| Staff and beyond | Set mobile strategy across apps and platforms. |

## Interview preparation

- DSA at medium level.
- The app lifecycle, and how state survives rotation or being killed.
- Architecture: MVVM or similar, and why.
- How you would build an offline-first feed or chat screen.
- Walk through your published or demo app.

## Resources

- [roadmap.sh: Android](https://roadmap.sh/android): A visual checklist of topics
- [Android Basics with Compose](https://developer.android.com/courses/android-basics-compose/course): Google's free beginner course
- [Expo documentation](https://docs.expo.dev): React Native with the fastest start
- [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui): A free structured course for iOS
