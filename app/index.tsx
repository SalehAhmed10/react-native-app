// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { ThemedView } from '@/components/ThemedView';
// import { images } from '@/constants';
// import { StatusBar } from 'expo-status-bar';

// export default function App() {
//     return (
//         <SafeAreaView style={styles.container}>
//             <ScrollView contentContainerStyle={{ height: '100%' }}>
//                 {/* <ThemedView
//                     style={{ flex: 1, }}
//                 >
//                     <Image
//                         source={images.AppLogo}
//                         // style={{ width: 200, height: 200 }}
//                         // resizeMode='contain'
//                         style={styles.Logo}
//                     />
//                 </ThemedView>

//                 <ThemedView>
//                     <Image
//                         source={images.HomeRectangle}
//                         style={{ width: '100%', height: 300 }}
//                         resizeMode='contain'
//                     />

//                 </ThemedView> */}

//                 <ThemedView style={styles.container}>
//                     <View style={styles.logoContainer}>
//                         {/* Replace with your logo image */}
//                         <Image
//                             source={require('@/assets/images/image1.png')}
//                             style={styles.logo}
//                             resizeMode="contain"
//                         />
//                         <Text style={styles.title}>Biblical Birthing</Text>
//                         <Text style={styles.subtitle}>
//                             Audio Scriptures, Affirmations & Prayers
//                         </Text>
//                     </View>
//                     <View style={styles.footer}>
//                         <View style={styles.pagination}>
//                             <View style={styles.dot} />
//                             <View style={styles.dot} />
//                             <View style={[styles.dot, styles.activeDot]} />
//                         </View>
//                         <TouchableOpacity style={styles.nextButton}>
//                             <Text style={styles.nextText}>→</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ThemedView>
//             </ScrollView>

//             <StatusBar
//                 style='auto'
//                 backgroundColor='transparent'
//                 translucent={true}
//             />

//         </SafeAreaView>
//     )
// }





// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: '100%',
//         justifyContent: 'space-between',
//     },

//     Logo: {
//         width: 500,
//         height: 500,
//         textAlign: 'center',
//     },

//     // container: {
//     //     flex: 1,
//     //     backgroundColor: "#fff",
//     //     justifyContent: "space-between",
//     // },
//     logoContainer: {
//         marginTop: 100,
//         alignItems: "center",
//     },
//     logo: {
//         width: 100,
//         height: 50,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: "600",
//         marginTop: 10,
//         color: "#7A6855", // Replace with your desired color
//     },
//     subtitle: {
//         fontSize: 14,
//         color: "#7A6855", // Replace with your desired color
//         marginTop: 5,
//     },
//     footer: {
//         paddingHorizontal: 20,
//         paddingBottom: 40,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//     },
//     pagination: {
//         flexDirection: "row",
//     },
//     dot: {
//         width: 8,
//         height: 8,
//         borderRadius: 4,
//         backgroundColor: "#ccc",
//         marginHorizontal: 4,
//     },
//     activeDot: {
//         backgroundColor: "#7A6855", // Active dot color
//     },
//     nextButton: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: "#7A6855", // Button color
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     nextText: {
//         fontSize: 24,
//         color: "#fff",
//         fontWeight: "bold",
//     },
// });

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
// import GestureRecognizer from 'react-native-swipe-gestures';
// import { images } from '@/constants';

// const OnboardingScreen1 = () => (
//     <ThemedView style={styles.screen}>
//         {/* <ThemedText>Welcome to Onboarding Screen 1</ThemedText> */}
//         <Image
//             source={images.AppLogo}
//             style={styles.logo}
//             resizeMode="contain"
//         />
//     </ThemedView>
// );

// const OnboardingScreen2 = () => (
//     <ThemedView style={styles.screen}>
//         <ThemedText>Welcome to Onboarding Screen 2</ThemedText>
//     </ThemedView>
// );

// const OnboardingScreen3 = () => (
//     <ThemedView style={styles.screen}>
//         <ThemedText>Welcome to Onboarding Screen 3</ThemedText>
//     </ThemedView>
// );

// const screens = [OnboardingScreen1, OnboardingScreen2, OnboardingScreen3];

// const Dots = ({ currentIndex }: { currentIndex: number }) => {
//     return (
//         <View style={styles.dotsContainer}>
//             {screens.map((_, index) => {
//                 const opacity = currentIndex === index ? 1 : 0.3;
//                 return (
//                     <Animated.View
//                         key={index}
//                         style={[styles.dot, { opacity }]}
//                     />
//                 );
//             })}
//         </View>
//     );
// };

// const App = () => {
//     const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
//     const [fadeAnim] = useState(new Animated.Value(1));

//     const animateTransition = (toValue: number) => {
//         Animated.timing(fadeAnim, {
//             toValue,
//             duration: 300,
//             useNativeDriver: true,
//         }).start();
//     };

//     const onSwipeLeft = () => {
//         if (currentScreenIndex < screens.length - 1) {
//             animateTransition(0);
//             setTimeout(() => {
//                 setCurrentScreenIndex(currentScreenIndex + 1);
//                 animateTransition(1);
//             }, 300);
//         }
//     };

//     const onSwipeRight = () => {
//         if (currentScreenIndex > 0) {
//             animateTransition(0);
//             setTimeout(() => {
//                 setCurrentScreenIndex(currentScreenIndex - 1);
//                 animateTransition(1);
//             }, 300);
//         }
//     };

//     const CurrentScreen = screens[currentScreenIndex];

//     return (
//         <GestureRecognizer
//             onSwipeLeft={onSwipeLeft}
//             onSwipeRight={onSwipeRight}
//             style={styles.container}
//         >
//             <Animated.View style={{ ...styles.screen, opacity: fadeAnim }}>
//                 <CurrentScreen />
//             </Animated.View>
//             <Dots currentIndex={currentScreenIndex} />
//             <TouchableOpacity
//                 style={[styles.prevButton, currentScreenIndex === 0 && styles.disabledButton]}
//                 onPress={onSwipeRight}
//                 disabled={currentScreenIndex === 0}
//             >
//                 <Text style={styles.prevText}>←</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={[styles.nextButton, currentScreenIndex === screens.length - 1 && styles.disabledButton]}
//                 onPress={onSwipeLeft}
//                 disabled={currentScreenIndex === screens.length - 1}
//             >
//                 <Text style={styles.nextText}>→</Text>
//             </TouchableOpacity>

//         </GestureRecognizer>
//     );
// };

// const styles = StyleSheet.create({

//     logo: {
//         width: 400,
//         height: 400,
//     },

//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//     },
//     prevButton: {
//         position: 'absolute',
//         bottom: 30,
//         left: 30,
//         padding: 10,
//         backgroundColor: '#000',
//         borderRadius: 5,
//     },
//     prevText: {
//         color: '#fff',
//         fontSize: 20,
//     },
//     nextButton: {
//         position: 'absolute',
//         bottom: 30,
//         right: 30,
//         // perfect circle button
//         padding: 15,
//         paddingVertical: 12,
//         backgroundColor: '#A59389',
//         borderRadius: '100%',


//     },
//     nextText: {
//         color: '#fff',
//         fontSize: 20,
//     },
//     disabledButton: {
//         backgroundColor: '#888',
//     },
//     dotsContainer: {
//         flexDirection: 'row',
//         position: 'absolute',
//         bottom: 80,
//     },
//     dot: {
//         width: 10,
//         height: 10,
//         borderRadius: 5,
//         backgroundColor: '#000',
//         marginHorizontal: 5,
//     },
// });

// export default App;




import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { images } from '@/constants';

const OnboardingScreen1 = () => (
    <ThemedView style={styles.screen}>
        <Image
            source={images.AppLogo}
            style={styles.logo}
            resizeMode="contain"
        />
    </ThemedView>
);

const OnboardingScreen2 = () => (
    <ThemedView style={styles.screen}>
        <ThemedText>Welcome to Onboarding Screen 2</ThemedText>
    </ThemedView>
);

const OnboardingScreen3 = () => (
    <ThemedView style={styles.screen}>
        <ThemedText>Welcome to Onboarding Screen 3</ThemedText>
    </ThemedView>
);
const OnboardingScreen4 = () => (
    <ThemedView style={styles.screen}>
        <ThemedText>Welcome to Onboarding Screen 3</ThemedText>
    </ThemedView>
);

const screens = [OnboardingScreen1, OnboardingScreen2, OnboardingScreen3, OnboardingScreen4];

const Dots = ({ currentIndex }: { currentIndex: number }) => {
    return (
        <ThemedView style={styles.dotsContainer}>
            {screens.map((_, index) => {
                const opacity = currentIndex === index ? 1 : 0.3;
                return (
                    <Animated.View
                        key={index}
                        style={[styles.dot, { opacity }]}
                    />
                );
            })}
        </ThemedView>
    );
};

const App = () => {
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [fadeAnim] = useState(new Animated.Value(1));

    const animateTransition = (toValue: number) => {
        Animated.timing(fadeAnim, {
            toValue,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const onSwipeLeft = () => {
        if (currentScreenIndex < screens.length - 1) {
            animateTransition(0);
            setTimeout(() => {
                setCurrentScreenIndex(currentScreenIndex + 1);
                animateTransition(1);
            }, 300);
        }
    };

    const onSwipeRight = () => {
        if (currentScreenIndex > 0) {
            animateTransition(0);
            setTimeout(() => {
                setCurrentScreenIndex(currentScreenIndex - 1);
                animateTransition(1);
            }, 300);
        }
    };

    const CurrentScreen = screens[currentScreenIndex];

    return (
        <GestureRecognizer
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            style={styles.container}
        >
            <Animated.View style={{ ...styles.screen, opacity: fadeAnim }}>
                <CurrentScreen />
            </Animated.View>
            <Dots currentIndex={currentScreenIndex} />
            {/* <TouchableOpacity
                style={[styles.prevButton, currentScreenIndex === 0 && styles.disabledButton]}
                onPress={onSwipeRight}
                disabled={currentScreenIndex === 0}
            >
                <Text style={styles.prevText}>←</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                style={[styles.nextButton, currentScreenIndex === screens.length - 1 && styles.disabledButton]}
                onPress={onSwipeLeft}
                disabled={currentScreenIndex === screens.length - 1}
            >
                <Text style={styles.nextText}>→</Text>
            </TouchableOpacity>
        </GestureRecognizer>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 400,
        height: 400,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    prevButton: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
    },
    prevText: {
        color: '#fff',
        fontSize: 20,
    },
    nextButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        padding: 15,
        paddingVertical: 12,
        backgroundColor: '#A59389',
        borderRadius: 50,
    },
    nextText: {
        color: '#fff',
        fontSize: 20,
    },
    disabledButton: {
        backgroundColor: '#888',
    },
    dotsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 80,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#888',
        marginHorizontal: 5,
    },
});

export default App;