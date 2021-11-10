//
//  JankyMaskApp.swift
//  JankyMask
//
//  Created by Ronald Mannak on 11/10/21.
//

import Foundation
import SwiftUI

@main
struct WalletApp: App {
    
    @State private var shouldPresentOnboarding = false
    let extensionBundleIdentifier = "com.dimitarnestorov.JankyMask.Extension"
    
    var body: some Scene {
        WindowGroup {
            ShortcutView()
        }
        
    }
}

