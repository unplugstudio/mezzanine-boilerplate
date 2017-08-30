# from __future__ import unicode_literals

# from django.db import models
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
#     logo = FileField("Logo", upload_to="site/logo", format="Image", blank=True)
#     footer_content = models.TextField("Footer content", max_length=1000)

#     def __str__(self):
#         return "Site Configuration"

#     class Meta:
#         verbose_name = verbose_name_plural = "Site Configuration"
