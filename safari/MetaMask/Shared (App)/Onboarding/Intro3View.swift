//
//  Intro3View.swift
//  Wallet
//
//  Created by Ronald Mannak on 10/14/21.
//

import SwiftUI

struct Intro3View: View {
        
    @Binding var tabIndex: Int
    @Binding var shouldDismiss: Bool
    
    var body: some View {
        VStack {
            Text("Safari extension installation tutorial part 3")
                .font(.title)
            
            Spacer()
            
            Text("placeholder for image")
            Spacer()
            
            HStack(spacing: 8) {
                Button("Previous") {
                    tabIndex -= 1
                }
                Spacer()
                Button("Done") {
                    shouldDismiss = true
                }
            }
            .padding(.bottom, 32)
        }
        .padding()
    }
}

struct Intro3View_Previews: PreviewProvider {
    @State static var tabIndex: Int = 0
    @State static var shouldDismiss: Bool = false
    static var previews: some View {
        Intro3View(tabIndex: $tabIndex, shouldDismiss: $shouldDismiss)
    }
}
