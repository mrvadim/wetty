import etag from 'etag';
import fresh from 'fresh';
import parseUrl from 'parseurl';
import fs from 'fs';
import { assetsPath } from './shared/path.js';
const ONE_YEAR_MS = 60 * 60 * 24 * 365 * 1000;
const isFresh = (req, res) => fresh(req.headers, {
    etag: res.getHeader('ETag'),
    'last-modified': res.getHeader('Last-Modified'),
});
export function redirect(req, res, next) {
    if (req.path.substr(-1) === '/' && req.path.length > 1)
        res.redirect(301, req.path.slice(0, -1) + req.url.slice(req.path.length));
    else
        next();
}
export function favicon(basePath) {
    const path = assetsPath('assets', 'favicon.ico');
    return (req, res, next) => {
        if (getPathName(req) !== `${basePath}/favicon.ico`) {
            next();
            return;
        }
        if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.statusCode = req.method === 'OPTIONS' ? 200 : 405;
            res.setHeader('Allow', 'GET, HEAD, OPTIONS');
            res.setHeader('Content-Length', '0');
            res.end();
            return;
        }
        fs.readFile(path, (err, buf) => {
            if (err)
                return next(err);
            Object.entries({
                'Cache-Control': `public, max-age=${Math.floor(ONE_YEAR_MS / 1000)}`,
                ETag: etag(buf),
            }).forEach(([key, value]) => {
                res.setHeader(key, value);
            });
            if (isFresh(req, res)) {
                res.statusCode = 304;
                return res.end();
            }
            res.statusCode = 200;
            res.setHeader('Content-Length', buf.length);
            res.setHeader('Content-Type', 'image/x-icon');
            return res.end(buf);
        });
    };
}
function getPathName(req) {
    try {
        const url = parseUrl(req);
        return (url === null || url === void 0 ? void 0 : url.pathname) ? url.pathname : undefined;
    }
    catch (e) {
        return undefined;
    }
}
//# sourceMappingURL=middleware.js.map