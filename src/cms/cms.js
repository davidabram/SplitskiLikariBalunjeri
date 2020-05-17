import CMS from 'netlify-cms-app';
import withStyled from './with-styled';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import MembersPagePreview from './preview-templates/MembersPagePreview';
import MembersGalleryPreview from './preview-templates/MembersGalleryPreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import VisionPagePreview from './preview-templates/VisionPagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import NotificationsPreview from './preview-templates/NotificationsPreview';
import ActivitiesPreview from './preview-templates/ActivitiesPreview';
import HeaderPreview from './preview-templates/HeaderPreview';
import FooterPreview from './preview-templates/FooterPreview';
import ImagesGalleryPreview from './preview-templates/ImagesGalleryPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', withStyled(IndexPagePreview));
CMS.registerPreviewTemplate('members', withStyled(MembersPagePreview));
CMS.registerPreviewTemplate('image-gallery', withStyled(ImagesGalleryPreview));
CMS.registerPreviewTemplate(
  'members-gallery',
  withStyled(MembersGalleryPreview)
);
CMS.registerPreviewTemplate('vision', withStyled(VisionPagePreview));
CMS.registerPreviewTemplate('about', withStyled(AboutPagePreview));
CMS.registerPreviewTemplate('contact', withStyled(ContactPagePreview));
CMS.registerPreviewTemplate('notifications', withStyled(NotificationsPreview));
CMS.registerPreviewTemplate('activities', withStyled(ActivitiesPreview));
CMS.registerPreviewTemplate('header', withStyled(HeaderPreview));
CMS.registerPreviewTemplate('footer', withStyled(FooterPreview));
