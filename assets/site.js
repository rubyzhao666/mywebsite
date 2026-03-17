const FEISHU_FORM_URL = "https://y11ymhavfb.feishu.cn/share/base/form/shrcn3UXdvKHmRVuzzVYRSy0SQj";

function buildFeishuHref(source) {
  const url = new URL(FEISHU_FORM_URL);
  if (source) {
    url.searchParams.set("source", source);
  }
  url.searchParams.set("utm_campaign", "website");
  url.searchParams.set("utm_medium", "referral");
  return url.toString();
}

function applyFeishuLink() {
  const nodes = document.querySelectorAll("[data-feishu-link]");
  nodes.forEach((node) => {
    const source = node.getAttribute("data-source") || "";
    node.setAttribute("href", buildFeishuHref(source));
  });
}

function applyYear() {
  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function enableSmoothJump() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyFeishuLink();
  applyYear();
  enableSmoothJump();
});
