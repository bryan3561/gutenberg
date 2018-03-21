/**
 * WordPress dependencies
 */
import { Dashicon } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';

function ReusableBlockIndicator( { title } ) {
	return (
		<Dashicon
			icon="controls-repeat"
			className="reusable-block-indicator"
			title={ sprintf( __( 'Shared Block: %s' ), title ) }
		/>
	);
}

export default ReusableBlockIndicator;
