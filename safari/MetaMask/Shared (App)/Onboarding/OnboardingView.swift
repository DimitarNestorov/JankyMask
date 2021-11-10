//
//  OnboardingView.swift
//  JankyMask
//
//  Created by Ronald Mannak on 11/10/21.
//

import SwiftUI

struct OnboardingView: View {
    
    @Environment(\.presentationMode) var presentationMode
    @State var tabIndex = 0
    @State var shouldDismiss: Bool = false
    
    var body: some View {
        
        if shouldDismiss == true {
            Text("").task { presentationMode.wrappedValue.dismiss() }
        }
        
        TabView(selection: $tabIndex) {
            Intro1View(tabIndex: $tabIndex, shouldDismiss: $shouldDismiss)
                .tag(0)
            Intro2View(tabIndex: $tabIndex, shouldDismiss: $shouldDismiss)
                .tag(1)
            Intro3View(tabIndex: $tabIndex, shouldDismiss: $shouldDismiss)
                .tag(2)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .tabViewStyle(.page)
        .indexViewStyle(.page(backgroundDisplayMode: .always))
    }
}

struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
    }
}
