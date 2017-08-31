# from __future__ import unicode_literals

# from django.utils.encoding import python_2_unicode_compatible

# from mezzanine.core.fields import FileField
# from mezzanine.core.models import SiteRelated


# ####################
# # Site configuration
# ####################

# @python_2_unicode_compatible
# class SiteConfiguration(SiteRelated):
#     """
#     Singleton model for storing site-wide variables.
#     """
#     logo = FileField("Logo", upload_to="site", format="Image", blank=True)
#     favicon = FileField(
#         "Favicon", upload_to="site", extensions=[".ico"], blank=True,
#         help_text="A 16x16 px image that appears in the browser tab")
#     banner_image = FileField(
#         "Default banner image", upload_to="site", format="Image",
#         blank=True, help_text="Will be used by default in the banner section of pages")

#     def __str__(self):
#         return str(self.site)

#     class Meta:
#         verbose_name = verbose_name_plural = "Site Configuration"
