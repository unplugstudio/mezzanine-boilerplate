from mezzanine import template
from mezzanine.core.request import current_request
from mezzanine.utils.sites import current_site_id

from theme.models import SiteConfiguration

register = template.Library()


@register.as_tag
def load_theme():
    """
    Adds the `SiteConfiguration` to the context.
    """
    request = current_request()
    if hasattr(request, "theme"):
        return request.theme
    site = current_site_id()
    theme = SiteConfiguration.objects.get_or_create(site_id=site)[0]
    request.theme = theme
    return theme
