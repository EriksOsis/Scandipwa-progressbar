import ContentWrapper from 'Component/ContentWrapper';
import ProgressBar from 'Component/ProgressBar';
import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.extension.style.scss';

/** @namespace ScandiwebTest/Route/Checkout/Component */
export class CheckoutComponent extends SourceCheckout {
    render() {
        const progress = 1; //the progress of the progress bar

        return (
            <div>
            <ProgressBar progress={ progress } steps={ Object.values(this.stepMap) } />
            <main block="Checkout">
                <ContentWrapper
                  wrapperMix={ {
                      block: 'Checkout',
                      elem: 'Wrapper',
                  } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
            </div>
        );
    }
}

export default CheckoutComponent;
