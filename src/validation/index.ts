/**
 * Validation foundation.
 *
 * Re-exports Zod as the application's validation library. Future feature
 * issues will add domain-specific schemas (e.g. meal creation, user
 * registration) by extending Zod here or in dedicated modules under this
 * directory.
 *
 * Note: this issue intentionally does not define feature-specific validation
 * rules.
 */

import { z } from "zod";

export { z };
