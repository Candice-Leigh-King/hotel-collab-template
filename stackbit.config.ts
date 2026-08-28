import { defineConfig } from '@stackbit/types';

// ==========================================
// COMPONENT SCHEMAS (1 - 17)
// ==========================================

const ThreeDeluxeBlock = {
    name: 'ThreeDeluxeBlock',
    type: 'object',
    label: '3-Deluxe Section',
    labelField: 'content-block-link',
    fields: [
        { name: '_section-type', type: 'string', const: '3-deluxe', hidden: true },
        { name: 'content-block-link', type: 'string', label: 'Section ID Anchor' },
        { name: 'tablet-image', type: 'image', label: 'Tablet Backup Image' },
        { name: 'top', type: 'object', fields: [{ name: 'textarea_html', type: 'markdown', label: 'Header Text' }] },
        { name: 'left', type: 'object', fields: [{ name: 'image', type: 'image' }, { name: 'textarea_html', type: 'markdown' }, { name: 'cta_html', type: 'markdown' }] },
        { name: 'middle', type: 'object', fields: [{ name: 'image', type: 'image' }, { name: 'textarea_html', type: 'markdown' }, { name: 'cta_html', type: 'markdown' }] },
        { name: 'right', type: 'object', fields: [{ name: 'image', type: 'image' }, { name: 'textarea_html', type: 'markdown' }, { name: 'cta_html', type: 'markdown' }] }
    ]
};

const StatsBlock = {
    name: 'StatsBlock',
    type: 'object',
    label: 'Statistics Showcase',
    fields: [
        { name: '_section-type', type: 'string', const: 'stats-block', hidden: true },
        { name: 'heading', type: 'string', label: 'Main Heading' },
        { name: 'icon', type: 'image', label: 'Section Icon' },
        ...[1, 2, 3, 4, 5].map(num => ({
            name: `stat-${num}`,
            type: 'object',
            label: `Statistic Item ${num}`,
            fields: [
                { name: 'figure', type: 'string', label: 'Number / Figure' },
                { name: 'title', type: 'string', label: 'Label / Description' }
            ]
        }))
    ]
};

const CarouselBlock = {
    name: 'CarouselBlock',
    type: 'object',
    label: 'Carousel Testimonials',
    fields: [
        { name: '_section-type', type: 'string', const: 'carousel-block', hidden: true },
        { name: 'heading', type: 'string', label: 'Section Heading' },
        { name: 'cta', type: 'markdown', label: 'Call to Action Button' },
        {
            name: 'carousel',
            type: 'list',
            label: 'Carousel Items',
            items: {
                type: 'object',
                fields: [
                    { name: 'brand-name', type: 'string', label: 'Brand / Author Name' },
                    { name: 'textarea_html', type: 'markdown', label: 'Review Text' },
                    { name: 'name-or-star-rating', type: 'string', label: 'Rating / Subtitle' }
                ]
            }
        }
    ]
};

const TextCtaBlock = {
    name: 'TextCtaBlock',
    type: 'object',
    label: 'Text & Call-To-Action',
    fields: [
        { name: '_section-type', type: 'string', const: 'text-cta-block', hidden: true },
        { name: 'heading', type: 'string', label: 'Heading' },
        { name: 'textarea_html', type: 'markdown', label: 'Body Text Content' },
        { name: 'cta', type: 'markdown', label: 'Action Button' }
    ]
};

const SpacerBlock = {
    name: 'SpacerBlock',
    type: 'object',
    label: 'Blank Layout Divider',
    fields: [
        { name: '_section-type', type: 'string', const: 'spacer-block', hidden: true }
    ]
};

const FormIntakeBlock = {
    name: 'FormIntakeBlock',
    type: 'object',
    label: 'Contact/Intake Form',
    fields: [
        { name: '_section-type', type: 'string', const: 'form-intake', hidden: true },
        { name: 'heading', type: 'string', label: 'Form Title Header' },
        {
            name: 'form-input',
            type: 'object',
            fields: [
                { name: 'text-option-1', type: 'string', label: 'Field 1 Placeholder' },
                { name: 'text-option-2', type: 'string', label: 'Field 2 Placeholder' },
                { name: 'text-option-3', type: 'string', label: 'Field 3 Placeholder' },
                { name: 'message', type: 'string', label: 'Message Box Label' },
                {
                    name: 'option-box',
                    type: 'object',
                    fields: [
                        { name: 'subject', type: 'string', label: 'Dropdown Default Label' },
                        { name: 'option-1', type: 'string' },
                        { name: 'option-2', type: 'string' },
                        { name: 'option-3', type: 'string' },
                        { name: 'option-4', type: 'string' }
                    ]
                }
            ]
        },
        { name: 'button', type: 'string', label: 'Submit Button Text' }
    ]
};

const SimpleHeaderBlock = {
    name: 'SimpleHeaderBlock',
    type: 'object',
    label: 'Simple Section Header',
    fields: [
        { name: '_section-type', type: 'string', const: 'simple-header', hidden: true },
        { name: 'heading', type: 'string', label: 'Section Title' }
    ]
};

const ImageGridTextBlock = {
    name: 'ImageGridTextBlock',
    type: 'object',
    label: 'Subheading Image Gallery Labels',
    fields: [
        { name: '_section-type', type: 'string', const: 'image-grid-text', hidden: true },
        { name: 'subheading', type: 'string', label: 'Gallery Heading' },
        {
            name: 'images',
            type: 'object',
            fields: [
                { name: 'first-text', type: 'markdown' },
                { name: 'second-text', type: 'markdown' },
                { name: 'third-text', type: 'markdown' },
                { name: 'fourth-text', type: 'markdown' }
            ]
        }
    ]
};

const PrimaryHeroBlock = {
    name: 'PrimaryHeroBlock',
    type: 'object',
    label: 'Primary Hero Layout',
    fields: [
        { name: '_section-type', type: 'string', const: 'primary-hero', hidden: true },
        { name: 'hero', type: 'string', label: 'Main Hero Heading' },
        { name: 'subheading', type: 'string', label: 'Hero Subtext' },
        { name: 'cta', type: 'markdown', label: 'Hero Action Button' }
    ]
};

const SplitSidebarLayoutBlock = {
    name: 'SplitSidebarLayoutBlock',
    type: 'object',
    label: 'Dual Sidebar Accent Block',
    fields: [
        { name: '_section-type', type: 'string', const: 'split-sidebar', hidden: true },
        { name: 'heading', type: 'string' },
        { name: 'subheading', type: 'string' },
        { name: 'left-vertical-text', type: 'string' },
        { name: 'right-vertical-text', type: 'string' }
    ]
};

// --- START OF NEW 7 BLOCKS ---

const ImageGalleryTextListBlock = {
    name: 'ImageGalleryTextListBlock',
    type: 'object',
    label: 'Image Row with Title Captions',
    fields: [
        { name: '_section-type', type: 'string', const: 'image-gallery-text-list', hidden: true },
        { name: 'textarea', type: 'markdown', label: 'Section Introduction Text' },
        ...[1, 2, 3, 4, 5].map(num => ({
            name: `image-${num}`,
            type: 'object',
            label: `Gallery Image ${num}`,
            fields: [
                { name: 'image', type: 'image', label: 'Upload Image' },
                { name: 'title', type: 'string', label: 'Bold Image Caption' }
            ]
        }))
    ]
};

const ThreeColumnCtaBlock = {
    name: 'ThreeColumnCtaBlock',
    type: 'object',
    label: '3-Column Text Grid with Base Button',
    fields: [
        { name: '_section-type', type: 'string', const: 'three-column-cta', hidden: true },
        { name: 'top', type: 'object', fields: [{ name: 'textarea_html', type: 'markdown', label: 'Top Text Header' }] },
        { name: 'left', type: 'object', fields: [{ name: 'textarea_html', type: 'markdown', label: 'Left Column Body' }] },
        { name: 'middle', type: 'object', fields: [{ name: 'textarea_html', type: 'markdown', label: 'Middle Column Body' }] },
        { name: 'right', type: 'object', fields: [{ name: 'textarea_html', type: 'markdown', label: 'Right Column Body' }] },
        { name: 'cta_html', type: 'markdown', label: 'Main Bottom Button' }
    ]
};

const SimpleTextBlock = {
    name: 'SimpleTextBlock',
    type: 'object',
    label: 'Plain Markdown/HTML Block',
    fields: [
        { name: '_section-type', type: 'string', const: 'simple-text', hidden: true },
        { name: 'textarea_html', type: 'markdown', label: 'Body Content' }
    ]
};

const TextBlockWithButton = {
    name: 'TextBlockWithButton',
    type: 'object',
    label: 'Plain Text Area with Button',
    fields: [
        { name: '_section-type', type: 'string', const: 'text-block-button', hidden: true },
        { name: 'textarea_html', type: 'markdown', label: 'Body Content' },
        { name: 'cta_html', type: 'markdown', label: 'Action Button Link' }
    ]
};

const TripleMetricRowBlock = {
    name: 'TripleMetricRowBlock',
    type: 'object',
    label: '3-Column Metric Highlights',
    fields: [
        { name: '_section-type', type: 'string', const: 'triple-metric-row', hidden: true },
        {
            name: 'left-stat',
            type: 'object',
            label: 'Left Metric Column',
            fields: [{ name: 'stat', type: 'string', label: 'Stat Number' }, { name: 'textarea', type: 'markdown', label: 'Description' }, { name: 'icon', type: 'image' }]
        },
        {
            name: 'middle-stat',
            type: 'object',
            label: 'Middle Metric Column',
            fields: [{ name: 'stat', type: 'string', label: 'Stat Number' }, { name: 'textarea', type: 'markdown', label: 'Description' }, { name: 'icon', type: 'image' }]
        },
        {
            name: 'right-stat',
            type: 'object',
            label: 'Right Metric Column',
            fields: [{ name: 'stat', type: 'string', label: 'Stat Number' }, { name: 'textarea', type: 'markdown', label: 'Description' }, { name: 'icon', type: 'image' }]
        }
    ]
};

