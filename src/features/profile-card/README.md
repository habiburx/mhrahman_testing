# Profile Card

This folder contains the portable profile/photo card.

Edit `profile-card.config.ts` to change:

- name, nickname, role, department, university, address
- academic and personal email
- profile photo path and image fit/position
- Google Scholar link
- profile-card buttons and footer social links

Social links with `essential: true` appear as buttons on the profile card.
Social links with `essential: false` stay available for footer/social use.

The profile image lives in:

```text
public/images/profile/
```

Current image path:

```text
/images/profile/mhrahman.webp
```

If you copy this folder into another project, also copy the image folder and keep the same public path or update `avatar` in `profile-card.config.ts`.
