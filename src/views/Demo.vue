<template lang="pug">
.container.demo#demo
	#demo-container
	.pager
		Page(
			:current='currentPage'
			:total='iconsCount'
			:page-size='pageSize'
			placement='top'
			show-sizer
			show-elevator
			@on-change='onPageChanged'
			@on-page-size-change='onPageSizeChanged'
		)
</template>

<script>
import FontAwesomeOpenUI5 from 'font-awesome-openui5';
import faIconChars from 'font-awesome-icon-chars';

export default {
	name: 'Demo',
	props: {
		/**
		 * Font Awesome 5 style
		 */
		faStyle: {
			type: String,
			required: true,
			validator(value) {
				return (value === 'solid') || (value === 'regular') || (value === 'brands');
			}
		}
	},
	data() {
		return {
			allIcons: faIconChars,
			currentPage: 1,
			pageSize: 10,
			container: null
		};
	},
	computed: {
		iconsCount() {
			return this.allIcons[this.faStyle].length;
		}
	},
	mounted() {
		sap.ui.getCore().attachInit(() => {
			this.renderControls();
		});
	},
	updated() {
		this.destroyControls();
		this.renderControls();
	},
	destroyed() {
		this.destroyControls();
	},
	beforeRouteUpdate(to, from, next) {
		// Reset page when route changed.
		this.currentPage = 1;
		this.pageSize = 10;

		next();
	},
	methods: {
		onPageChanged(newPage) {
			this.currentPage = newPage;
			this.renderControls();
		},
		onPageSizeChanged(newSize) {
			this.pageSize = newSize;
			this.renderControls();
		},
		renderControls() {
			this.destroyControls();

			const style = this.faStyle; // Font Awesome 5 style
			const icons = faIconChars[style];
			const pageSize = this.pageSize;
			const currentPage = this.currentPage;

			FontAwesomeOpenUI5.loadIcons();

			const buttons = [];
			const startIndex = ((pageSize * currentPage) - pageSize);
			const endBoundary = (pageSize * currentPage);
			for (let i = startIndex; (i < icons.length) && (i < endBoundary); i++) {
				const { name } = icons[i];
				const button = new sap.m.Button({
					text: name,
					icon: `sap-icon://font-awesome-${style}/${name}`,
					press() {
						window.open(`https://fontawesome.com/icons/${name}?style=${style}`, '_blank');
					}
				});
				button.addStyleClass(`fa-icon ${style}`);
				buttons.push(button);
			}
			this.container = new sap.ui.layout.Grid('demo-container-grid', {
				content: buttons,
				position: sap.ui.layout.GridPosition.Center
			});
			this.container.placeAt('demo-container');
		},
		destroyControls() {
			if (this.container) {
				this.container.destroy();
				this.container = null;
			}
		}
	}
};
</script>
