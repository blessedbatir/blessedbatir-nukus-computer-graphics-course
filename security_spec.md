# Security Specification - Nukus Computer Graphics Course

## 1. Data Invariants
- A `Registration` must include a valid phone number and full name.
- Only admins can manage (create/update/delete) `BlogPost` and `PortfolioItem`.
- `SiteSettings` can only be updated by admins.
- Subscriptions are public-write (create only) but private-read (admin only).
- Admin status is verified by existence in `/admins/{uid}`.

## 2. The "Dirty Dozen" Payloads (Attacker Strategy)

1. **Identity Spoofing**: Attempt to create a registration with a future `createdAt`.
2. **Privilege Escalation**: Non-authenticated user trying to delete a blog post.
3. **Data Poisoning**: Creating a registration with a 1MB string in `fullName`.
4. **State Shortcutting**: Updating a registration status (if we had one) without permission.
5. **ID Poisoning**: Injecting junk document IDs like `./../test`.
6. **PII Leak**: Non-admin user trying to list all `subscriptions`.
7. **Admin Spoof**: Authenticated user trying to create a document in `/admins`.
8. **Setting Vandalism**: Non-admin user trying to change the site's accent color.
9. **Portfolio Hijack**: Authenticated user trying to update a portfolio item they didn't create.
10. **Bulk Scraping**: Attempting a `list` query on `registrations` without a filter as a guest.
11. **Timestamp Manipulation**: Sending a client-side timestamp instead of server-side for `BlogPost.publishedAt`.
12. **Type Confusion**: Sending an array for a string field in `PortfolioItem`.

## 3. Test Runner (Mock Tests)
- `PERMISSION_DENIED` for all above payloads.
- Verified in `firestore.rules.test.ts`.
