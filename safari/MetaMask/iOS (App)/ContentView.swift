//
//  Main.swift
//  JankyMask (iOS)
//
//  Created by Dimitar Nestorov on 16.11.21.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        ScrollView(.vertical, showsIndicators: true) {
            Text("You need to enable JankyMask in Safari")
                .padding()
                .font(.headline)
                .multilineTextAlignment(.center)
            Group {
                Image("Image 1")
                    .renderingMode(.original)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .padding(.horizontal)
                Text("Visit any website and tap on AA or 🧩 inside the address bar")
                    .padding()
                    .multilineTextAlignment(.center)
            }
            Group {
                Image("Image 2")
                    .renderingMode(.original)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                Text("Tap “Manage Extensions”")
                    .padding()
                    .multilineTextAlignment(.center)
            }
            Group {
                Image("Image 3")
                    .renderingMode(.original)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .padding(.horizontal)
                Text("Enable JankyMask")
                    .padding()
                    .multilineTextAlignment(.center)
            }
            Group {
                Image("Image 4")
                    .renderingMode(.original)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                Text("Tap JankyMask to enable it")
                    .multilineTextAlignment(.center)
                    .padding()
            }
            HStack {
                Image("Image 5")
                    .renderingMode(.original)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .padding(.horizontal)
                Image("Image 6")
                    .renderingMode(.original)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .padding(.horizontal)
            }
            Text("For the best experience tap on “Always Allow…” and “Always Allow on Every Website”")
                .multilineTextAlignment(.center)
                .padding()
            Image("Image 7")
                .renderingMode(.original)
                .resizable()
                .aspectRatio(contentMode: .fit)
                .padding(.horizontal)
            Text("Every time you need to interact with the wallet a blue dot 🔵 will appear. Just open JankyMask.")
                .padding()
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: 430, maxHeight: .infinity)
        .clipped()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
