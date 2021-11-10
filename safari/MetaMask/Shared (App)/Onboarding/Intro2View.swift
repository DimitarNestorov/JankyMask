//
//  Intro2View.swift
//  Wallet
//
//  Created by Ronald Mannak on 10/14/21.
//

import SwiftUI

struct Intro2View: View {
    
    @Binding var tabIndex: Int
    @Binding var shouldDismiss: Bool
    
    var body: some View {
        VStack {
            Text("Safari extension installation tutorial part 2")
                .font(.title)
            
            Spacer()
            
            Text("placeholder for image")
            Spacer()
            
            HStack(spacing: 8) {
                Button("Previous") {
                    tabIndex -= 1
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

struct Intro2View_Previews: PreviewProvider {
    @State static var tabIndex: Int = 0
    @State static var shouldDismiss: Bool = false
    static var previews: some View {
        Intro2View(tabIndex: $tabIndex, shouldDismiss: $shouldDismiss)
    }
}
