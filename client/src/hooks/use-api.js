import { useMemo } from "react";
import TennisParserApi from "@/tennis-parser-api/tennis-parser-api";

const baseUrl = import.meta.env.VITE_API_URL;

export default function useApi() {
    return useMemo(() => new TennisParserApi({ baseUrl }), []);
}