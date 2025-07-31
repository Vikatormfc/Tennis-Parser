from fastapi.staticfiles import StaticFiles
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi import HTTPException 

class SPAStaticFiles(StaticFiles):
    """
    In a Single Page Application (SPA), routing is done in the browser.
    This means that, in many cases the server will receive requests for routes that do not exist on the back end.
    In this case, it should simply serve the SPA. If the route is not found on the front-end, then the SPA can display a 404 page.
    """
    async def get_response(self, path: str, scope):
        try:
            return await super().get_response(path, scope)
        except (HTTPException, StarletteHTTPException) as error:
            if error.status_code == 404:
                return await super().get_response('.', scope)

