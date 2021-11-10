//
//  Intro1View.swift
//  Wallet
//
//  Created by Ronald Mannak on 10/14/21.
//

import SwiftUI

struct Intro1View: View {
        
    @Binding var tabIndex: Int
    @Binding var shouldDismiss: Bool
    
    var body: some View {
        VStack {
            Text("Safari extension installation tutorial part 1")
                .font(.title)
            
            Spacer()
            
            Text("placeholder for image")
            Spacer()
            
            HStack(spacing: 8) {
                Button("Cancel") {
                    shouldDismiss = true
                }
                Spacer()
                Button("Next") {
                    tabIndex += 1
                }
            }
            .padding(.bottom, 32)
        }
        .padding()        
    }
}

struct Intro1View_Previews: PreviewProvider {
    @State static var tabIndex: Int = 0
    @State static var shouldDismiss: Bool = false
    static var previews: some View {
        Intro1View(tabIndex: $tabIndex, shouldDismiss: $shouldDismiss)
    }
}
