"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "lang";
const DEFAULT_LANG = "es";
const SUPPORTED_LANGS = ["es", "en"];

const listeners = new Set();

function getSnapshot() {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (SUPPORTED_LANGS.includes(stored)) return stored;
    } catch {
        // localStorage no disponible (modo privado, etc.)
    }
    return DEFAULT_LANG;
}

function getServerSnapshot() {
    return DEFAULT_LANG;
}

function subscribe(callback) {
    listeners.add(callback);
    window.addEventListener("storage", callback);
    return () => {
        listeners.delete(callback);
        window.removeEventListener("storage", callback);
    };
}

function persistLang(next) {
    try {
        window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
        // localStorage no disponible
    }
    listeners.forEach((callback) => callback());
}

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
    const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = useCallback((next) => {
        if (!SUPPORTED_LANGS.includes(next)) return;
        persistLang(next);
    }, []);

    const toggleLang = useCallback(() => {
        persistLang(getSnapshot() === "es" ? "en" : "es");
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
    }
    return ctx;
}
