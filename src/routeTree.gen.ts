/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as ProfilImport } from './routes/profil';
import { Route as DashboardImport } from './routes/dashboard';
import { Route as IndexImport } from './routes/index';
import { Route as RegisterIndexImport } from './routes/register/index';
import { Route as LoginIndexImport } from './routes/login/index';
import { Route as BookIndexImport } from './routes/book/index';
import { Route as DashboardLogSystemImport } from './routes/dashboard/LogSystem';
import { Route as DashboardAllBooksImport } from './routes/dashboard/AllBooks';
import { Route as DashboardAddBookImport } from './routes/dashboard/AddBook';
import { Route as BookBookImport } from './routes/book/$book';

// Create/Update Routes

const ProfilRoute = ProfilImport.update({
  id: '/profil',
  path: '/profil',
  getParentRoute: () => rootRoute,
} as any);

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const RegisterIndexRoute = RegisterIndexImport.update({
  id: '/register/',
  path: '/register/',
  getParentRoute: () => rootRoute,
} as any);

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any);

const BookIndexRoute = BookIndexImport.update({
  id: '/book/',
  path: '/book/',
  getParentRoute: () => rootRoute,
} as any);

const DashboardLogSystemRoute = DashboardLogSystemImport.update({
  id: '/LogSystem',
  path: '/LogSystem',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardAllBooksRoute = DashboardAllBooksImport.update({
  id: '/AllBooks',
  path: '/AllBooks',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardAddBookRoute = DashboardAddBookImport.update({
  id: '/AddBook',
  path: '/AddBook',
  getParentRoute: () => DashboardRoute,
} as any);

const BookBookRoute = BookBookImport.update({
  id: '/book/$book',
  path: '/book/$book',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/dashboard': {
      id: '/dashboard';
      path: '/dashboard';
      fullPath: '/dashboard';
      preLoaderRoute: typeof DashboardImport;
      parentRoute: typeof rootRoute;
    };
    '/profil': {
      id: '/profil';
      path: '/profil';
      fullPath: '/profil';
      preLoaderRoute: typeof ProfilImport;
      parentRoute: typeof rootRoute;
    };
    '/book/$book': {
      id: '/book/$book';
      path: '/book/$book';
      fullPath: '/book/$book';
      preLoaderRoute: typeof BookBookImport;
      parentRoute: typeof rootRoute;
    };
    '/dashboard/AddBook': {
      id: '/dashboard/AddBook';
      path: '/AddBook';
      fullPath: '/dashboard/AddBook';
      preLoaderRoute: typeof DashboardAddBookImport;
      parentRoute: typeof DashboardImport;
    };
    '/dashboard/AllBooks': {
      id: '/dashboard/AllBooks';
      path: '/AllBooks';
      fullPath: '/dashboard/AllBooks';
      preLoaderRoute: typeof DashboardAllBooksImport;
      parentRoute: typeof DashboardImport;
    };
    '/dashboard/LogSystem': {
      id: '/dashboard/LogSystem';
      path: '/LogSystem';
      fullPath: '/dashboard/LogSystem';
      preLoaderRoute: typeof DashboardLogSystemImport;
      parentRoute: typeof DashboardImport;
    };
    '/book/': {
      id: '/book/';
      path: '/book';
      fullPath: '/book';
      preLoaderRoute: typeof BookIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/login/': {
      id: '/login/';
      path: '/login';
      fullPath: '/login';
      preLoaderRoute: typeof LoginIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/register/': {
      id: '/register/';
      path: '/register';
      fullPath: '/register';
      preLoaderRoute: typeof RegisterIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

interface DashboardRouteChildren {
  DashboardAddBookRoute: typeof DashboardAddBookRoute;
  DashboardAllBooksRoute: typeof DashboardAllBooksRoute;
  DashboardLogSystemRoute: typeof DashboardLogSystemRoute;
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardAddBookRoute: DashboardAddBookRoute,
  DashboardAllBooksRoute: DashboardAllBooksRoute,
  DashboardLogSystemRoute: DashboardLogSystemRoute,
};

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren
);

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/dashboard': typeof DashboardRouteWithChildren;
  '/profil': typeof ProfilRoute;
  '/book/$book': typeof BookBookRoute;
  '/dashboard/AddBook': typeof DashboardAddBookRoute;
  '/dashboard/AllBooks': typeof DashboardAllBooksRoute;
  '/dashboard/LogSystem': typeof DashboardLogSystemRoute;
  '/book': typeof BookIndexRoute;
  '/login': typeof LoginIndexRoute;
  '/register': typeof RegisterIndexRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/dashboard': typeof DashboardRouteWithChildren;
  '/profil': typeof ProfilRoute;
  '/book/$book': typeof BookBookRoute;
  '/dashboard/AddBook': typeof DashboardAddBookRoute;
  '/dashboard/AllBooks': typeof DashboardAllBooksRoute;
  '/dashboard/LogSystem': typeof DashboardLogSystemRoute;
  '/book': typeof BookIndexRoute;
  '/login': typeof LoginIndexRoute;
  '/register': typeof RegisterIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/dashboard': typeof DashboardRouteWithChildren;
  '/profil': typeof ProfilRoute;
  '/book/$book': typeof BookBookRoute;
  '/dashboard/AddBook': typeof DashboardAddBookRoute;
  '/dashboard/AllBooks': typeof DashboardAllBooksRoute;
  '/dashboard/LogSystem': typeof DashboardLogSystemRoute;
  '/book/': typeof BookIndexRoute;
  '/login/': typeof LoginIndexRoute;
  '/register/': typeof RegisterIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | '/'
    | '/dashboard'
    | '/profil'
    | '/book/$book'
    | '/dashboard/AddBook'
    | '/dashboard/AllBooks'
    | '/dashboard/LogSystem'
    | '/book'
    | '/login'
    | '/register';
  fileRoutesByTo: FileRoutesByTo;
  to:
    | '/'
    | '/dashboard'
    | '/profil'
    | '/book/$book'
    | '/dashboard/AddBook'
    | '/dashboard/AllBooks'
    | '/dashboard/LogSystem'
    | '/book'
    | '/login'
    | '/register';
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/profil'
    | '/book/$book'
    | '/dashboard/AddBook'
    | '/dashboard/AllBooks'
    | '/dashboard/LogSystem'
    | '/book/'
    | '/login/'
    | '/register/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  DashboardRoute: typeof DashboardRouteWithChildren;
  ProfilRoute: typeof ProfilRoute;
  BookBookRoute: typeof BookBookRoute;
  BookIndexRoute: typeof BookIndexRoute;
  LoginIndexRoute: typeof LoginIndexRoute;
  RegisterIndexRoute: typeof RegisterIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRouteWithChildren,
  ProfilRoute: ProfilRoute,
  BookBookRoute: BookBookRoute,
  BookIndexRoute: BookIndexRoute,
  LoginIndexRoute: LoginIndexRoute,
  RegisterIndexRoute: RegisterIndexRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/profil",
        "/book/$book",
        "/book/",
        "/login/",
        "/register/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/AddBook",
        "/dashboard/AllBooks",
        "/dashboard/LogSystem"
      ]
    },
    "/profil": {
      "filePath": "profil.tsx"
    },
    "/book/$book": {
      "filePath": "book/$book.tsx"
    },
    "/dashboard/AddBook": {
      "filePath": "dashboard/AddBook.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/AllBooks": {
      "filePath": "dashboard/AllBooks.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/LogSystem": {
      "filePath": "dashboard/LogSystem.tsx",
      "parent": "/dashboard"
    },
    "/book/": {
      "filePath": "book/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/register/": {
      "filePath": "register/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
