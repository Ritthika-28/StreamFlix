import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TVShows from "./pages/TVShows/TVShows";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Search from "./pages/Search/Search";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MyList from "./pages/MyList/MyList";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Notifications from "./pages/Notifications/Notifications";
import NotFound from "./pages/NotFound/NotFound";
import EditProfile from "./pages/EditProfile/EditProfile";
import WatchMovie from "./pages/Watch/WatchMovie";
import WatchTV from "./pages/Watch/WatchTV";
import TVCategory from "./pages/TVCategory/TVCategory";
import ContinueWatching from "./pages/ContinueWatching/ContinueWatching";

// NEW SETTINGS PAGES
import Language from "./pages/Language/Language";
import Privacy from "./pages/Privacy/Privacy";
import DarkMode from "./pages/DarkMode/DarkMode";
import WatchHistory from "./pages/WatchHistory/WatchHistory";
import About from "./pages/About/About";

const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>

      {/* Public Routes */}

      <Route
        path="/"
        element={
          currentUser ? <Navigate to="/home" replace /> : <Signup />
        }
      />

      <Route
        path="/login"
        element={
          currentUser ? <Navigate to="/home" replace /> : <Login />
        }
      />

      <Route
        path="/signup"
        element={
          currentUser ? <Navigate to="/home" replace /> : <Signup />
        }
      />

      <Route
        path="/forgot-password"
        element={
          currentUser ? (
            <Navigate to="/home" replace />
          ) : (
            <ForgotPassword />
          )
        }
      />

      {/* Protected Routes */}

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/profile" element={<Profile />} />

        {/* SETTINGS */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/language" element={<Language />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/dark-mode" element={<DarkMode />} />
        <Route path="/watch-history" element={<WatchHistory />} />
        <Route path="/about" element={<About />} />

        <Route path="/tv-category/:category" element={<TVCategory />} />
        <Route
          path="/continue-watching"
          element={<ContinueWatching />}
        />
      </Route>

      {/* Watch Pages (Without MainLayout) */}

      <Route
        path="/watch/movie/:id"
        element={
          <ProtectedRoute>
            <WatchMovie />
          </ProtectedRoute>
        }
      />

      <Route
        path="/watch/tv/:id"
        element={
          <ProtectedRoute>
            <WatchTV />
          </ProtectedRoute>
        }
      />

      {/* 404 */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;